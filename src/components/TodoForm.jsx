export default function TodoForm ({ optionChoice }) {
  const selectHandler = (e) => {
    optionChoice(e.currentTarget.value)
  }
  return (
    <div>
      <div className='select'>
        <label>
          <span>
            Ver Lista de Tarjetas
          </span>
        </label>
        <select className='form-select' name='todos' onChange={selectHandler}>
          <option defaultValue='all'>Todas</option>
          <option value='completed'>Descartados</option>
          <option value='uncompleted'>Posibles</option>
        </select>
      </div>
    </div>
  )
}
