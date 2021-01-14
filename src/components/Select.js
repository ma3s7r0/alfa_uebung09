import React from 'react';
import { connect } from 'react-redux';

function Select(props) {

    const p = props

    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
				<select onChange={event => p.changeSelA(event.target.value)} value={p.selA}>
					<option value="-1">Bitte Bereich wählen</option>
                    {p.optionsA.map((option, index) => <option value={index}>{option}</option>)}
				</select>
                {p.selA !== "-1" && (
				<select onChange={event => p.changeSelB(event.target.value)} value={p.selB}>
					<option value="-1">Bitte wählen</option>
                    {p.optionsB.map((option, index) => <option value={index}>{option}</option>)}
				</select>
                )}
            </form>
        </>
    );
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        ...state
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        ...props,
        changeSelA: (value) => {
            dispatch( { type: "CHANGE_SELB", selB: "-1"} )
            dispatch( { type: "CHANGE_SELA", selA: value} )

        },
        changeSelB: (value) => {
            dispatch( { type: "CHANGE_SELB", selB: value} )
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Select);