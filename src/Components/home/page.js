import React from 'react';
import Header from "../header/page";

function Page() {
  return(
    <div>
      <Header/>

      <section className="space">
      </section>

      <section className="breadcrumbs">
        <div className="create-article">
          <button>Create Article</button>
        </div>
      </section>


      <div className="container-articles">
        <div className="cards">
          <a href="/">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/>
            <div className="card-body">
              <h4><b>JANE DOE</b></h4> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Numquam fugiat aliquam repudiandae est eaque et dolorem aliquid 
                illum quae magnam officia, id, dicta pariatur odit recusandae deleniti. 
                Dignissimos, numquam magnam!
              </p> 
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Page;