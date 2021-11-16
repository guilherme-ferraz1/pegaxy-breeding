import React, { useState } from 'react'

const useBreed = () => {
    const [bloodLine, setBloodline] = useState<string>('Hoz');
    const [pegaType, setPegaType] = useState<string>('Founder');
    const [breedCount, setBreedCount] = useState<number>(0)

    return {
        setBloodline,
        setPegaType,
        setBreedCount
    }
}