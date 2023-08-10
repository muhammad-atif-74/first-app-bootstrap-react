import React, { useState } from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState(
        {
            backgroundColor: 'white',
            color: 'black',
            height: '100vh'
        }
    )

    const [btnText, setbtnText] = useState('Enable Dark Mode');

    const handleDarkMode = () => {
        if (myStyle.color == 'black') {
            setmyStyle(
                {
                    backgroundColor: 'black',
                    color: 'white',
                    height: '100vh'
                }
            )
            setbtnText('Enable Light Mode')
        }
        else {
            setmyStyle(
                {
                    backgroundColor: 'white',
                    color: 'black',
                    height: '100vh'
                }
            )
            setbtnText('Enable Dark Mode')
        }

    }

    return (
        <div style={myStyle}>
            <div className="container my-3" >
                <div className="card" style={myStyle}>
                    <div className="card-header">
                        <h3>About Us</h3>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere non iste, quasi adipisci veniam, pariatur deleniti quis consequuntur numquam voluptatem eveniet totam. Error cum provident nobis. Quia, exercitationem doloribus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum blanditiis, atque quia placeat ratione dolorum nesciunt aspernatur sapiente eaque voluptas ducimus tenetur excepturi nam temporibus! Recusandae eveniet ipsum saepe tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil cum provident veniam voluptas! Nulla aspernatur similique ad, nemo assumenda neque optio vero velit provident nisi beatae excepturi consequuntur quia sunt at quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi nam sequi vel blanditiis facere. Magni corrupti veritatis mollitia cupiditate aspernatur consectetur. Laudantium doloremque eos qui, odio ad culpa suscipit? Provident at, vitae dolores esse numquam nihil expedita impedit reprehenderit rerum alias voluptatum? Voluptatibus.</p>

                        <button className="btn btn-warning" onClick={handleDarkMode}>{btnText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
