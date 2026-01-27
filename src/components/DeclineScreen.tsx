interface DeclineScreenProps {
    active: boolean
}

export default function DeclineScreen({ active }: DeclineScreenProps) {
    return (
        <div className={`screen ${active ? 'active' : ''}`} id="decline-screen">
            <div className="content-container">
                <div className="decline-content">
                    <h2 className="decline-title">We understand.</h2>
                    <p className="decline-message">
                        The door remains open for visionaries like you.
                        Perhaps our paths will align when the time is right.
                    </p>
                    <p className="decline-signature">— Korabytes Executive Society</p>
                </div>
            </div>
        </div>
    )
}
