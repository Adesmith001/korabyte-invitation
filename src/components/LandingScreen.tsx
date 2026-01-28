import { useState, useRef, useEffect } from 'react'
import { Member } from '../types'

interface LandingScreenProps {
    active: boolean
    members: Member[]
    onMemberSelect: (member: Member) => void
}

export default function LandingScreen({ active, members, onMemberSelect }: LandingScreenProps) {
    const [inputValue, setInputValue] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredMembers, setFilteredMembers] = useState<Member[]>([])
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)

        if (value.trim().length === 0) {
            setShowDropdown(false)
            return
        }

        // Match exact first name, last name, or full name only - for privacy
        const searchValue = value.toLowerCase().trim()
        const filtered = members.filter(member => {
            const nameParts = member.name.toLowerCase().split(' ')
            const fullName = member.name.toLowerCase()
            // Check if input matches first name, last name, or full name exactly
            return nameParts.some(part => part === searchValue) || fullName === searchValue
        })

        setFilteredMembers(filtered)
        setShowDropdown(filtered.length > 0)
    }

    const handleSelect = (member: Member) => {
        setInputValue(member.name)
        setShowDropdown(false)
        setTimeout(() => {
            onMemberSelect(member)
        }, 300)
    }

    return (
        <div className={`screen ${active ? 'active' : ''}`} id="landing-screen">
            <div className="watermark">[ACCESS GRANTED]</div>

            <div className="content-container">
                <div className="logo-container">
                    <h1 className="logo">kora<span className="logo-accent">bytes</span></h1>
                    <div className="logo-subtitle">Executive Society</div>
                </div>

                <div className="input-container" ref={dropdownRef}>
                    <label htmlFor="name-input" className="input-label">Enter your name</label>
                    <input
                        type="text"
                        id="name-input"
                        className="name-input"
                        placeholder="Type to search..."
                        value={inputValue}
                        onChange={handleInputChange}
                        autoComplete="off"
                        spellCheck={false}
                    />
                    <div className={`dropdown ${!showDropdown ? 'hidden' : ''}`}>
                        {filteredMembers.map((member, index) => (
                            <div
                                key={index}
                                className="dropdown-item"
                                onClick={() => handleSelect(member)}
                            >
                                <div className="dropdown-item-name">{member.name}</div>
                                <div className="dropdown-item-role">{member.role}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hint-text">You've been selected. Find yourself.</div>
            </div>
        </div>
    )
}
