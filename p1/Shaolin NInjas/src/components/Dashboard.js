import React, { Component,Spinner } from 'react'
import NinjaList from './NinjaList';
import AddNinja from './AddNinja';

class Dashboard extends Component {

    state = {
        ninjas:[
            {name:"Mario",age:34,belt:"green",id:1},
            {name:"Yoshi",age:43,belt:"red",id:2},
            {name:"Leo",age:14,belt:"brown",id:3}
        ]
    }

    addNew = (e) => {
        e.id = Math.random()
        const newList = [...this.state.ninjas,e]
        this.setState({
            ninjas:newList
        })
    }

    deleteNinja = (id) =>{
        console.log(id);
        const newList = this.state.ninjas.filter(n=>{
            return n.id !== id
        })

        this.setState({
            ninjas:newList
        })
    }

    render() {
        return (
            <div className='dashboard'>

                <div className="writeup_1 container">
                    <h2>Welcome to the Shaolin</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam vero assumenda nostrum placeat porro. A perspiciatis expedita sapiente itaque minima id, quam obcaecati illo minus porro qui dolorem consequatur eum veritatis voluptatum non, esse voluptatibus fugit harum fugiat voluptates saepe autem necessitatibus. Et commodi nobis molestiae harum nisi amet laboriosam ut. Officia nam corrupti laborum repellendus ipsam rem quibusdam, dolore perspiciatis nisi, corporis iure, laudantium explicabo eaque quaerat atque. Rerum minima fuga fugit aspernatur iusto delectus suscipit repellendus, error corporis soluta sapiente, tempore id eos! Nobis, asperiores neque eum ipsa natus quidem numquam facilis ducimus pariatur fugiat! Minima impedit eius dicta perferendis unde voluptate quidem vitae vero reiciendis, est quia alias explicabo veniam hic dolorum aspernatur reprehenderit temporibus ratione?</p>
                </div>

                <div className="warriors">
                    <u><h3 className='warriors'>List of our Warriors</h3></u>
                    <NinjaList ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
                </div>
                <br/>

                <div className="writeup_2">
                    <h2>Shaolin's great history</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corrupti itaque quisquam inventore exercitationem ullam, aspernatur expedita repellat repudiandae cumque, quos illo unde tempora nisi sapiente facere modi! Temporibus qui atque rerum quos! Unde, eos animi ipsum nulla doloribus quisquam quos nesciunt laudantium blanditiis cum tenetur earum vel beatae expedita maiores quam voluptates, itaque tempora a ea obcaecati quaerat magni perspiciatis? Obcaecati nam nostrum laudantium temporibus aliquam tenetur consectetur nihil soluta atque? A, perspiciatis placeat. Ipsa maiores deserunt blanditiis in nihil suscipit quam quas consectetur repudiandae incidunt minus illum labore quidem, impedit iure inventore nam officiis, maxime laborum necessitatibus possimus officia aspernatur. Repudiandae dicta corrupti veritatis iure sequi similique quisquam ipsum voluptate! Expedita cupiditate sequi tempore ipsa quae. Impedit fugiat, explicabo itaque perspiciatis possimus reiciendis aut, asperiores beatae nemo voluptas hic minima autem vero, quod quae enim facere illo earum eius nobis? Accusantium iste qui ducimus velit placeat. Cum molestias quis earum quisquam necessitatibus, iste voluptas atque corporis aliquid neque. Architecto laudantium ea nisi nam facere! Vero natus quibusdam accusamus praesentium, doloremque officiis libero incidunt, quidem fugit quam, repudiandae atque voluptatibus architecto esse animi maiores. Provident dicta eaque voluptatem distinctio aspernatur porro tempore laborum ea cum obcaecati labore reprehenderit debitis atque minus, dolore facilis quam in officiis officia voluptate. Atque saepe sed porro voluptates autem quaerat repellat officia facilis sequi tenetur nesciunt, exercitationem neque laudantium accusamus totam corporis? Ad doloremque consequuntur, placeat cum ab quibusdam ipsam exercitationem necessitatibus expedita unde voluptatum dolores ullam! Ipsum voluptate laudantium itaque. Eum eveniet molestiae deleniti repudiandae numquam explicabo consequuntur, eos, pariatur sequi modi voluptas nulla. Natus dolor aspernatur officiis molestias qui, animi nesciunt a est quos soluta nulla iure ipsam quia accusantium temporibus dolorem iusto asperiores et assumenda eius? Placeat a rem nam aliquam nostrum provident suscipit et ratione, odio molestiae unde. Sequi, in.</p>
                </div>

                <div className="addNinja container">
                    <h3>Add New Ninja</h3>
                    <AddNinja addNew={this.addNew}/>
                    {/* <Spinner animation="border" /> */}
                </div>

            </div>
        )
    }
}

export default Dashboard
