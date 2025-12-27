// Professional Global Footer Script for Raozan Care
document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <style>
        :root {
            --f-bg: #ffffff;
            --f-txt: #64748b;
            --f-hd: #0f172a;
            --f-brd: #f1f5f9;
            --f-acc: #3b82f6; /* Modern Blue Accent */
        }

        .global-footer {
            background-color: var(--f-bg);
            padding: 50px 24px 30px;
            text-align: center;
            border-top: 1px solid var(--f-brd);
            font-family: 'Plus Jakarta Sans', sans-serif;
            margin-top: 40px;
            width: 100%;
            box-sizing: border-box;
        }

        .footer-brand-box {
            margin-bottom: 25px;
        }

        .footer-logo-main {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--f-hd);
            letter-spacing: -0.5px;
            text-transform: uppercase;
            margin-bottom: 6px;
            display: block;
        }

        .footer-tagline-text {
            color: var(--f-txt);
            font-size: 0.85rem;
            max-width: 300px;
            margin: 0 auto;
            line-height: 1.5;
        }

        .footer-nav-links {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .f-btn {
            background: #f8fafc;
            color: var(--f-hd);
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: 700;
            padding: 10px 16px;
            border-radius: 12px;
            transition: all 0.2s ease;
            border: 1px solid var(--f-brd);
        }

        .f-btn:active {
            transform: scale(0.95);
            background: #f1f5f9;
        }

        .footer-hr {
            height: 1px;
            background: var(--f-brd);
            border: none;
            margin: 0 0 25px 0;
        }

        .footer-credits {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .copy-info {
            color: var(--f-txt);
            font-size: 0.75rem;
            font-weight: 500;
            margin: 0;
        }

        .live-status {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #f0fdf4;
            color: #16a34a;
            padding: 5px 12px;
            border-radius: 100px;
            font-size: 0.7rem;
            font-weight: 700;
            border: 1px solid #dcfce7;
        }

        .dot {
            width: 6px;
            height: 6px;
            background: #22c55e;
            border-radius: 50%;
            animation: footerPulse 2s infinite;
        }

        @keyframes footerPulse {
            0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
            70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
            100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
    </style>

    <footer class="global-footer">
        <div class="footer-brand-box">
            <span class="footer-logo-main">Raozan Care</span>
            <p class="footer-tagline-text">Your trusted digital hub for emergency services and community resources.</p>
        </div>

        <nav class="footer-nav-links">
            <a href="about.html" class="f-btn">About</a>
            <a href="privacy.html" class="f-btn">Privacy Policy</a>
            <a href="contact.html" class="f-btn">Contact</a>
        </nav>

        <hr class="footer-hr">

            <p class="copy-info">
                &copy; ${new Date().getFullYear()} Raozan Care. All rights reserved.
            </p>
        </div>
    </footer>
    `;

    // CRITICAL FIX: Inject into the scrollable container
    const appContent = document.querySelector('.app-content');
    if (appContent) {
        appContent.insertAdjacentHTML('beforeend', footerHTML);
    } else {
        // Fallback for pages without .app-content
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});