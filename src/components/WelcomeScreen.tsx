import { Member } from '../types'

interface WelcomeScreenProps {
    active: boolean
    member: Member | null
    onYes: () => void
    onNo: () => void
}

export default function WelcomeScreen({ active, member, onYes, onNo }: WelcomeScreenProps) {
    if (!member) return null

    return (
        <div className={`screen ${active ? 'active' : ''}`} id="welcome-screen">
            <div className="watermark watermark-welcome">DECRYPTED_V1.04</div>

            <div className="content-container">
                <div className="welcome-content">
                    <h2 className="greeting">Hi <span id="user-name">{member.name}</span>,</h2>

                    <div className="role-container">
                        <div className="role-label">Your Role</div>
                        <div className="user-role">{member.role}</div>
                    </div>

                    <div className="glaze-container">
                        <p className="user-glaze">{member.glaze}</p>
                    </div>

                    <div className="invitation-message">
                        <p className="message-primary">
                            You've been identified as part of the <span className="highlight">top 1%</span> —
                            a visionary selected to join the inner circle of Korabytes Executive Society.
                        </p>

                        <p className="message-secondary">
                            We're gathering the brightest minds to decode the future of global payments.
                            This isn't just an invitation. It's recognition of your impact and a call to
                            shape what comes next.
                        </p>

                        <p className="message-question">
                            Will you join us?
                        </p>
                    </div>

                    <div className="decision-buttons">
                        <button onClick={onYes} className="btn btn-yes">
                            <span>Yes, I'm in</span>
                            <div className="btn-glow"></div>
                        </button>
                        <button onClick={onNo} className="btn btn-no">
                            <span>Not this time</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
