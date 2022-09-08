 import React , {Component} from "react";

const Context = React.createContext();

export class Provider extends Component {
    handler = (action, newObject) => {
        switch(action){
            case "ADD_PROJECT":
                this.setState({
                    projects: [newObject, ...this.state.projects],
                });
                break;
            case "ADD_BLOG":
                this.setState({
                    blogs: [newObject, ...this.state.blogs],
                });
                 break;
            case "ADD_RECOMMENDATION":
                 this.setState({
                    recommendations: [newObject, ...this.state.recommendations],
                    });
                    break;

        }
    };
    
    state={
        handler : this.handler,
        blogs : [
            {
                id:1,
                title: "Blog 1",
                imageUrl: "https://image.shutterstock.com/image-photo/cloud-words-tags-related-blogging-260nw-164020316.jpg",
                excerpt: "This is my blog about...",
            },
            {
                id:2,
                title: "Blog 2",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbr_fm3HpTxrkDIJkKmVV0PEsey-HDmVlP1aqY8bGeA&s",
                excerpt:"This is my blog about...",
            },
            {
                id:3,
                title:"Blog 3",
                imageUrl: "https://media.istockphoto.com/photos/love-working-from-home-picture-id1182641010?b=1&k=20&m=1182641010&s=170667a&w=0&h=8vcHvvDfC7HnyZb24As-jdr7z8tNu8Xr5JJRvHYVXEw=",
                excerpt: "This is my blog about...",
            },
        ],
        recommendations : [
            {
                id : 1 ,
                name : "Random Guy1",
                company : "ABC Company",
                designation : "CEO",
                message : "Good at logical thinking",
            },
            {
                id : 2 ,
                name : "Random Guy2",
                company : "ABC Company",
                designation : "CEO",
                message : "Creative and smart worker",
            },
            {
                id : 3 ,
                name : "Random Guy3",
                company : "ABC Company",
                designation : "CEO",
                message : "Fluent in communication",
            },
            {
                id : 4 ,
                name : "Random Guy4",
                company : "ABC Company",
                designation : "CEO",
                message : "Completes her work in quick and accurate way",
            },        
        ],
        skills:[
            {
                id:1,
                name: "HTML5",
                imageUrl:"https://i.pinimg.com/originals/f8/29/a6/f829a6693b596f60c98cfd3a04dc1f6e.jpg",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id:2,
                name: "CSS3",
                imageUrl:"https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id:3,
                name: "JAVASCRIPT",
                imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNlIpuOHHIQyGK5ken1X3hO4kDoUe0n2SCmqpmf9I0ThNz1aaSafx_Fc9zPCntXs6bZU&usqp=CAU",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id:4,
                name: "BOOTSTRAP4",
                imageUrl:"https://image.pngaaa.com/38/3476038-middle.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id:5,
                name: "REACT",
                imageUrl:"https://reactjs.org/logo-og.png",
                starsTotal: 3,
                starsActive: 2,        
            },
            {
                id:6,
                name: "MYSQL",
                imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCoBL6-xZlDLTPi6guLr7bPx1iix7Gi-HmkhoOKphvqGlnLqON72EhPAgyfugAnoLijQ&usqp=CAU",
                starsTotal: 3,
                starsActive: 2,        
            },
            {
                id:7,
                name: "PYTHON",
                imageUrl:"https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png",
                starsTotal: 3,
                starsActive: 3,        
            },
            {
                id:8,
                name: "FLASK",
                imageUrl:"https://miro.medium.com/max/438/1*0G5zu7CnXdMT9pGbYUTQLQ.png",
                starsTotal: 3,
                starsActive: 2,        
            },
    
        ],
        projects:[
            {
                id:1,
                title: "Project 1",
                imageUrl: "https://i.pinimg.com/736x/42/98/6e/42986eb87b4ec6dfc4e4522fb6818cce.jpg",
                excerpt: "This is my project about...",
                body: "Body 1",
            },
            {
                id:2,
                title: "Project 2",
                imageUrl: "https://i.pinimg.com/736x/99/0d/f5/990df5f878fa6b7aa8f135284c14412d.jpg",
                excerpt:"This is my project about...",
                body: "Body 2",
            },
            {
                id:3,
                title:"Project 3",
                imageUrl: "https://aticiwebdesign.com/wp-content/uploads/2016/01/working-space-business-freelance-concept-top-view-above-flat-lay-toning_1220-1856.jpg",
                excerpt: "This is my project about...",
                body: "Body 3",
            },
        ],
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }

}

export const Consumer = Context.Consumer;