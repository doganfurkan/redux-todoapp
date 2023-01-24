import React from 'react'
import Filters from './Filters'
import List from './List'

function Content() {
  return (
    <section id="content">
        <div id="kutu">
            <form>
                <input type="text" placeholder='Yeni not...'/>
                <button>Ekle</button>
            </form>
        </div>
        <List/>
        <Filters/>
    </section>
  )
}

export default Content