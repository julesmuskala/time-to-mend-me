import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import Resolution from './Resolution'

import addIcon from '../assets/art/add.svg'

const ResolutionBoard = () => {

  const resolutions = useSelector(state => state.resolution.resolutions)
  let history = useHistory()

  let renderedResolutions

  if (resolutions) {
    renderedResolutions = resolutions.map(resolution => (
      <Resolution
        id={resolution.id}
        key={resolution.id}
        imageID={resolution.imageID}
        title={resolution.title}
        start={resolution.start} />
    ))
  }

  const handleAdd = () => {
    history.push('/time-to-mend-me/new-resolution')
  }

  return (
    <>
      <main className="app-main">
        {renderedResolutions}
      </main>
      <div className="add-board">
        <div className="add-board__line" />
        <button onClick={handleAdd}>
          <img src={addIcon} alt="Add new resolution" />
        </button>
        <div className="add-board__line" />
      </div>
    </>
  )
}

export default ResolutionBoard