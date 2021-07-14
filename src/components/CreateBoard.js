import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import boozeIcon from '../assets/art/booze-ico.svg'
import burgirIcon from '../assets/art/burgir-ico.svg'
import cigIcon from '../assets/art/cig-ico.svg'
import shopIcon from '../assets/art/shop-ico.svg'
import syringeIcon from '../assets/art/syringe-ico.svg'
import timeIcon from '../assets/art/time-ico.svg'
import xxxIcon from '../assets/art/xxx-ico.svg'
import diceIcon from '../assets/art/dice-ico.svg'
import pillsIcon from '../assets/art/pills-ico.svg'
import coffeeIcon from '../assets/art/coffee-ico.svg'
import wildcardIcon from '../assets/art/wildcard-ico.svg'
import leafIcon from '../assets/art/leaf-ico.svg'

import IconFieldButton from './IconFieldButton'
import { createNewResolution } from '../features/resolutionSlice'

const CreateBoard = () => {

  //Change datetime local type

  let history = useHistory()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleIconChanged = event => {
    setIcon(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log({name, icon})
    history.push('/time-to-mend-me')
    dispatch(createNewResolution({
      imageID: icon,
      title: name,
      start: Date.now()
    }))
  }

  return (
    <main className="create-board">
      <form className="create-board__form" onSubmit={handleSubmit}>
        <fieldset className="create-board__fieldset">
          <legend className="create-board__form__header">Create a resolution</legend>
          <label
            htmlFor="res-name"
            className="create-board__form__label"
          >
            Name:
          </label>
          <input
            type="text"
            id="res-name"
            placeholder="My resolution"
            className="create-board__form__input"
            value={name}
            onChange={handleNameChange}
            maxLength="25"
          />
          {/*
          <label
            htmlFor="res-date"
            className="create-board__form__label"
          >
            Start date:
          </label>
          <input
            type="datetime-local"
            id="res-date"
            className="create-board__form__input"
          />
          */}
          <p>Select icon:</p>
          <div className="create-board__form__icon-field">
            <IconFieldButton
              src={boozeIcon}
              name="booze"
              alt="Bottle of alcohol"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={burgirIcon}
              name="burgir"
              alt="Unhealthy food"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={cigIcon}
              name="cig"
              alt="Tabacco"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={shopIcon}
              name="shop"
              alt="Shopping bag"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={syringeIcon}
              name="syringe"
              alt="Syringe"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={timeIcon}
              name="time"
              alt="Clock"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={xxxIcon}
              name="xxx"
              alt="Porn"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={diceIcon}
              name="dice"
              alt="Gambling"
              iconState={icon}
              func={handleIconChanged}
              
            />
            <IconFieldButton
              src={pillsIcon}
              name="pills"
              alt="Pills"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={coffeeIcon}
              name="coffee"
              alt="Caffeine"
              iconState={icon}
              func={handleIconChanged}
            />
            <IconFieldButton
              src={wildcardIcon}
              name="wildcard"
              alt="Wildcard"
              iconState={icon}
              func={handleIconChanged}
            />
            <label htmlFor="leaf">
              <input
                type="radio" name="icons"
                value="leaf" id="leaf"
                checked={icon === 'leaf'}
                onChange={handleIconChanged}
              />
              <img src={leafIcon} alt="Go vegan" style={{opacity: 0.7}} />
            </label>
          </div>
          <input
            type="submit"
            value="Confirm"
            className="submit-button"
            disabled={icon === '' || name === ''}
          />
        </fieldset>
      </form>
    </main>
  )
}

export default CreateBoard