export default function Footer({ socials }) {
    return (
        <div className="footer">
            <ul>
                <li>© 2026 Harendra</li>
                {
                    socials.map((item, index) =>
                    (
                        <li key={index}><a href="#">{item}</a></li>
                    )
                    )
                }
            </ul>

        </div>
    )
}