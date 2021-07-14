const IconFieldButton = ({ name, src, alt, iconState, func }) => (
  <label htmlFor={name}>
    <input
      type="radio" name="icons"
      value={name} id={name}
      checked={iconState === name}
      onChange={func}
    />
    <img src={src} alt={alt} />
  </label>
)

export default IconFieldButton