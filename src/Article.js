import './App.css'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

function Article() {
    return (
        <article>
        <header>
          <h1>Abe&nbsp;Lincoln</h1>
          <p>
            1441 Monument Avenue<br/> Springfield, IL 62702<br/>
            <a href="tel:1-217-782-2717">217.782.2717</a>
            <a href="http://www.alplm.org">website</a>
          </p>
        </header>
        <div class="one-col">
            <Experience />
            <div class="two-col">
                <Education />
                <Skills />
            </div>
        </div>
        
        </article>
    )
}

export default Article;