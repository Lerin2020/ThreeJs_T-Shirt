import React from 'react'
import CustomButton from './CustomButton'
const Aipicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      className='aipicker-textarea'
      placeholder='Ask AI'
      value={prompt
      }
      onChange={(e) => {setPrompt(e.target.value)}}
      rows={5}
       />
       <div className='flex flex-wrap gap-3'>
       {generatingImg ? (
          <CustomButton 
          type = 'outline'
          title = 'Asking AI....'
          customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton 
              type = 'outline'
              title = 'AI logo'
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs'
            />
            <CustomButton 
              type = 'filled'
              title = 'AI full'
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs'
            />
          </>

        )}
       </div>
        
    </div>
  )
}

export default Aipicker