import React from 'react';
export default class CourseComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {likesP:this.props.course.likes, priceP:this.props.course.price };
    }

    render(){
      return <React.Fragment>


          <div className="col-md-4">

            <div className="col-md-4">
                <button className="btn btn-danger" onClick={this.props.ParentHandler.bind(this,
                    this.props.course.id)}>
                    <span className="glyphicon glyphicon-trash">
                        
                    </span>
                </button>
            </div>

          <p>Name: {this.props.course.name}</p>
          <p>Duration: {this.props.course.duration}</p>
          <p>Rating: {this.props.course.rating}</p>
          <p>Price: {this.state.priceP}</p>
          <p>Location: {this.props.course.location}</p>
          <img src={this.props.course.imageurl} height="100px" width="100px"></img>
          <br />
          <button className="btn btn-primary" onClick={this.incremementlikes.bind(this)}>
              <span className="glyphicon glyphicon-thumbs-up">

              </span>
              {this.state.likesP}
          </button>
          </div>
      </React.Fragment>;
    }

    incremementlikes(){
        this.setState({likesP:this.state.likesP+1});
        this.setState({priceP:this.state.priceP+1});
    }
  }

