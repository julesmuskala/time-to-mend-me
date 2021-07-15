import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { removeResolution } from '../features/resolutionSlice'

import closeIcon from '../assets/art/close.svg'
import boozeIcon from '../assets/art/booze-ico.svg'
import burgirIcon from '../assets/art/burgir-ico.svg'
import cigIcon from '../assets/art/cig-ico.svg'
import coffeeIcon from '../assets/art/coffee-ico.svg'
import shopIcon from '../assets/art/shop-ico.svg'
import syringeIcon from '../assets/art/syringe-ico.svg'
import timeIcon from '../assets/art/time-ico.svg'
import wildcardIcon from '../assets/art/wildcard-ico.svg'
import xxxIcon from '../assets/art/xxx-ico.svg'
import diceIcon from '../assets/art/dice-ico.svg'
import pillsIcon from '../assets/art/pills-ico.svg'
import leafIcon from '../assets/art/leaf-ico.svg'

const Resolution = ({ id, imageID, title, start }) => {

  const [timeAgo, setTimeAgo] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const timeAgo = Math.floor((Date.now() - start) / 1000)
      let output = ''
      
      if (timeAgo <= 5) {
        output = 'Just now'
      } else if (timeAgo <= 60) {
        output = `${timeAgo} seconds ago`
      } else if (timeAgo <= 3600) {
        let minutes = Math.floor(timeAgo / 60)
        output = `${minutes} minutes ago`
      } else if (timeAgo <= 86400) {
        let hours = Math.floor(timeAgo / 3600)
        output = `${hours} hours ago`
      } else if (timeAgo <= 2592000) {
        let days = Math.floor(timeAgo / 86400)
        output = `${days} days ago`
      } else {
        let months = Math.floor(timeAgo / 2592000)
        output = `${months} months ago`
      }
      setTimeAgo(output)
    }, 1000)

    return () => clearInterval(timer)
  }, [start])
  
  const dispatch = useDispatch()

  let icon

  switch (imageID) {
    case 'booze':
      icon = boozeIcon
      break
    case 'burgir':
      icon = burgirIcon
      break
    case 'cig':
      icon = cigIcon
      break
    case 'coffee':
      icon = coffeeIcon
      break
    case 'shop':
      icon = shopIcon
      break
    case 'syringe':
      icon = syringeIcon
      break
    case 'time':
      icon = timeIcon
      break
    case 'wildcard':
      icon = wildcardIcon
      break
    case 'xxx':
      icon = xxxIcon
      break
    case 'dice':
      icon = diceIcon
      break
    case 'pills':
      icon = pillsIcon
      break
    case 'leaf':
      icon = leafIcon
      break
    default:
      icon = wildcardIcon
      break
  }

  const handleRemove = () => {
    dispatch(removeResolution(id))
  }

  return (
    <div className="resolution">
      <div className="resolution__remove">
        <button onClick={handleRemove}>
          <img src={closeIcon} alt="Remove resolution" />
        </button>
      </div>
      <div className="resolution__icon">
        <img src={icon} alt="" />
      </div>
      <div className="resolution__desc">
        <h2>{title}</h2>
        <p>{timeAgo}</p>
      </div>
    </div>
  )
}

export default Resolution