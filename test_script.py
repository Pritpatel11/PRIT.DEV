from playwright.sync_api import sync_playwright

def run_cuj(page):
    print("Navigating to Home")
    page.goto("http://localhost:5173/")
    page.wait_for_timeout(2000)

    # Take screenshot of the theme switcher
    print("Clicking Theme Switcher")
    page.get_by_label("Toggle theme").click()
    page.wait_for_timeout(1000)

    print("Selecting Theme")
    page.get_by_label("Switch to Neon Purple theme").click()
    page.wait_for_timeout(1000)

    page.screenshot(path="/home/jules/verification/screenshots/theme_switcher.png")

    # Scroll down to testimonials
    print("Navigating to Testimonials")
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(2000)

    # Click Next Testimonial
    print("Clicking Next Testimonial")
    page.get_by_label("Next testimonial").click()
    page.wait_for_timeout(1000)

    # Click Previous Testimonial
    print("Clicking Previous Testimonial")
    page.get_by_label("Previous testimonial").click()
    page.wait_for_timeout(1000)

    # Click a specific dot
    print("Clicking Testimonial Dot")
    page.get_by_label("Go to testimonial 3").click()
    page.wait_for_timeout(1000)

    page.screenshot(path="/home/jules/verification/screenshots/testimonials.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    import os
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
            print("Done")
