import React from 'react'

    const CardCategories = ({name, image}) => {
  return (
    <div className="cat">
      <img src={image}alt="" />
      <div>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default CardCategories
