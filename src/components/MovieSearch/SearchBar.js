import React from 'react'

export const SearchBar = (props) => {
  return(
    <div>
      <div className="row">
        <section className="">
          <form onSubmit={props.handleSubmit}>
            <div>
              <input type="text" className="input mb-3" onChange={props.handleChange} placeholder="Find your movies here!"></input>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
