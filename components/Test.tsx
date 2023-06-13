'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export const Test = () => {
    const supabase = createClientComponentClient()


    const test = async () => {
        const { data } = await supabase.from('sessions').select('*')
        console.log(data)
    }



    return (
        <button onClick={() => test()}>asd</button>
    )
}