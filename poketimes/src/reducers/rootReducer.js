const initState = {
    posts:[
        {id:'1',title:"Squirtle's Egg hunt",body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tempora, nesciunt officiis rem deserunt modi quae architecto. Dolorem magnam perferendis iusto dolores, labore voluptas similique sed repudiandae nostrum amet odio."},
        {id:'2',title:"Charmander's watery adventure",body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tempora, nesciunt officiis rem deserunt modi quae architecto. Dolorem magnam perferendis iusto dolores, labore voluptas similique sed repudiandae nostrum amet odio."},
        {id:'3',title:"Yoshi's sword-play action",body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tempora, nesciunt officiis rem deserunt modi quae architecto. Dolorem magnam perferendis iusto dolores, labore voluptas similique sed repudiandae nostrum amet odio."}
    ]
}

const rootReducer = (state = initState,action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => post.id !== action.id)
        return{
            ...state,
            posts:newPosts
        }
    }
    
    return state
}

export default rootReducer