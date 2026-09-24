from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:4173/contact")
    page.wait_for_timeout(6000)

    # Click on the NAME label to focus the input field
    page.get_by_text("NAME >").click(force=True)
    page.wait_for_timeout(500)
    page.keyboard.type("John Doe")
    page.wait_for_timeout(500)

    # Click on the EMAIL label to focus the email field
    page.get_by_text("EMAIL >").click(force=True)
    page.wait_for_timeout(500)
    page.keyboard.type("john.doe@example.com")
    page.wait_for_timeout(500)

    # Click on the MESSAGE label to focus the textarea
    page.get_by_text("MESSAGE >").click(force=True)
    page.wait_for_timeout(500)
    page.keyboard.type("Hello, this is a test message.")
    page.wait_for_timeout(500)

    # Submit the form
    page.get_by_role("button", name="EXECUTE_SEND").click(force=True)
    page.wait_for_timeout(2000)

    # Click the close button on the toast notification
    page.get_by_role("button", name="Close notification").click(force=True)
    page.wait_for_timeout(1000)

    page.screenshot(path="verification_contact.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="verification_videos")
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
