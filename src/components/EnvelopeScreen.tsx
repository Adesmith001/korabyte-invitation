import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Download } from 'lucide-react'

interface EnvelopeScreenProps {
    active: boolean
}

export default function EnvelopeScreen({ active }: EnvelopeScreenProps) {
    const envelopeRef = useRef<HTMLDivElement>(null)
    const flapRef = useRef<HTMLDivElement>(null)
    const sealRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (active && !hasAnimated.current) {
            hasAnimated.current = true
            playAnimation()
        }
    }, [active])

    const playAnimation = () => {
        const tl = gsap.timeline()

        // 1. Envelope Entry (0-400ms)
        tl.fromTo(envelopeRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' }
        )

        // 2. Seal Break (400-600ms)
        tl.to(sealRef.current, {
            scale: 1.2,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
        }, '+=0')

        // 3. Flap Lift (600-1200ms)
        tl.to(flapRef.current, {
            rotateX: -180,
            duration: 0.6,
            ease: 'power2.inOut',
            transformOrigin: 'top center',
        }, '-=0.1')

        // 4. Card Slide Up (1000-1800ms)
        tl.fromTo(cardRef.current,
            { y: '100%', opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
        )

        // 5. Details Reveal (1600-2000ms)
        tl.fromTo('.card-header',
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            '-=0.3'
        )

        tl.fromTo('.card-title',
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            '-=0.2'
        )

        tl.fromTo('.detail-row',
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
            '-=0.2'
        )

        tl.fromTo('.card-footer',
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
            '-=0.2'
        )
    }

    return (
        <div className={`screen ${active ? 'active' : ''}`} id="envelope-screen">
            <div className="content-container">
                <div className="envelope-container">
                    {/* Envelope Image */}
                    <div ref={envelopeRef} className="envelope-image-wrapper">
                        <img
                            src="/IMG_6554.PNG"
                            alt="Invitation Envelope"
                            className="envelope-image"
                        />

                        {/* Envelope Flap Overlay */}
                        <div ref={flapRef} className="envelope-flap-overlay">
                            <div ref={sealRef} className="envelope-seal">
                                <div className="seal-inner">K</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Invitation Card - Fixed at Bottom */}
            <div ref={cardRef} className="invitation-card">
                <div className="card-header">
                    <div className="card-logo">korabytes</div>
                    <div className="card-badge">EXECUTIVE SOCIETY</div>
                </div>

                <div className="card-title">You're Invited</div>

                <div className="card-details">
                    <div className="detail-row">
                        <div className="detail-label">Venue</div>
                        <div className="detail-value">KORA HQ, Lagos</div>
                    </div>

                    <div className="detail-row">
                        <div className="detail-label">Coordinates</div>
                        <div className="detail-value">6.44748 / 3.47366</div>
                    </div>

                    <div className="detail-row">
                        <div className="detail-label">Status</div>
                        <div className="detail-value status-value">DECRYPTED_V1.04</div>
                    </div>

                    <div className="detail-row">
                        <div className="detail-label">Date</div>
                        <div className="detail-value">14.05.2026</div>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="footer-text">Decoding the future of global payments</div>
                </div>
            </div>

            {/* Download Button */}
            <a
                href="/IMG_6554.PNG"
                download="korabytes-invitation.png"
                className="download-icon"
                title="Save Invitation"
            >
                <Download size={24} color="white" />
            </a>
        </div>
    )
}
