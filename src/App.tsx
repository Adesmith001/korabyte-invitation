import { useState, useEffect } from 'react'
import LandingScreen from './components/LandingScreen'
import WelcomeScreen from './components/WelcomeScreen'
import EnvelopeScreen from './components/EnvelopeScreen'
import DeclineScreen from './components/DeclineScreen'
import { Member, Screen } from './types'
import { Analytics } from "@vercel/analytics/next"

function App() {
    const [currentScreen, setCurrentScreen] = useState<Screen>('landing')
    const [selectedMember, setSelectedMember] = useState<Member | null>(null)
    const [members, setMembers] = useState<Member[]>([])

    useEffect(() => {
        // Load members data
        fetch('/members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
            .catch(err => console.error('Failed to load members:', err))
    }, [])

    const handleMemberSelect = (member: Member) => {
        setSelectedMember(member)
        setCurrentScreen('welcome')
    }

    const handleYes = () => {
        setCurrentScreen('envelope')
    }

    const handleNo = () => {
        setCurrentScreen('decline')
    }

    return (
        <>
            <Analytics />
            <LandingScreen
                active={currentScreen === 'landing'}
                members={members}
                onMemberSelect={handleMemberSelect}
            />
            <WelcomeScreen
                active={currentScreen === 'welcome'}
                member={selectedMember}
                onYes={handleYes}
                onNo={handleNo}
            />
            <EnvelopeScreen
                active={currentScreen === 'envelope'}
            />
            <DeclineScreen
                active={currentScreen === 'decline'}
            />
        </>
    )
}

export default App
