import React, { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'
    
const Loading = (loading)  => {

    return (
        <SyncLoader size={15} color={'#fff'} loading={loading} backgroundColor={'#306D7C'} className='loading'/>
    )
}

export default Loading