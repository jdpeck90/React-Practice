import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return(
            <div>
                <p>Header Here...</p>
                {this.props.children}
            </div>
        )
    }
}

export default App;