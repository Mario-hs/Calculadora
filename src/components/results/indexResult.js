import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './indexResult.scss'

const Result = () => {
    const res = useSelector(state => state.Calc.values)
    console.log(res)
    return (
        <Fragment>
            <div>
                <h1>{res.length === 0 ? 0 : res}</h1>
            </div>
        </Fragment>
    )
}

export default Result;