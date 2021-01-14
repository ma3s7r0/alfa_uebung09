import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Table from './components/Table';
import Select from './components/Select';

function App(probs) {
  return (
    <div id="container">
      <header>
        <h1>Bücher und Mehr</h1>
      </header>
      <BrowserRouter>
            <>
                <Nav />
                <main>
                    <Route path="/shop" exact component={Select} />
                    {(probs.selA !== "-1" && probs.selB !== "-1") &&
                    <>
                      <Route path="/shop" exact component={Table} />
                      <Route path="/cart" exact component={Cart} />                    
                    </>
                    } 
                </main>
            </>
        </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    /* alle Eigenschaften des State: */
    ...state
    /* nur eine Eigenschaft des State:
    vorname : state.vorname
    */
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (App);
