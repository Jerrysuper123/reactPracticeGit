
import React, { Component } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

// have two arrows
//function props return a function(oerson, index)
class persons extends Component {
    //    static getDerivedStateFromProps(props, state){
    //     console.log('Persons.js is getting derived state');
    //     return state;
    //    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons.js should component update');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
        // return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js get snapshot before update');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons.js did update');
        console.log(snapshot);
    };


    render() {
        console.log('render persons.js');
        return (
            <AuthContext.Consumer>
                {this.props.persons.map((person, index) => {
                    // having return and Person on the same line
                    return (
                        <Person
                            // clicked ={this.deletePersonHandler} which takes in index as the prarameter
                            // whenever we need to pass a parameter to function in app.js. we need to use this.props
                            click={() => this.props.clicked(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={event => this.props.changed(event, person.id)}
                            // when to use this and when not to use this.props.
                            //as long as it is class based component. we need to use this
                            isAuth={this.props.IsAuthenticated}
                        />
                    );
                }
                )
                }
            </AuthContext.Consumer>
        );

    }
};

export default persons;



