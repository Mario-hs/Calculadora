import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { getNumbers } from '../../actions';
import { getOperator } from '../../actions';
import { calculate } from '../../actions';
import { clear } from '../../actions';

import Result from '../../components/results/indexResult';
import './indexHome.scss'

const Home = () => {

    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className="container-calc">
                <div className="container-result">
                    <Result />
                </div>
                <div className="container-values">
                    <ul>
                        <li>
                            <button type="button" className="clear" onClick={() => {
                                dispatch(clear())
                            }} >AC</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch()
                            }} >+/-</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getOperator('%'))
                            }} >%</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getOperator('/'))
                            }} >÷</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(7))
                            }}>7</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(8))
                            }} >8</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(9))
                            }} >9</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getOperator('x'))
                            }} >x</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(4))
                            }} >4</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(5))
                            }} >5</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(6))
                            }} >6</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getOperator('-'))
                            }} >-</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(1))
                            }} >1</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(2))
                            }} >2</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(3))
                            }} >3</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getOperator('+'))
                            }} >+</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(0))
                            }} >0</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getNumbers(0))
                            }} >0</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(getOperator(','))
                            }} >,</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => {
                                dispatch(calculate())
                            }} >=</button>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;