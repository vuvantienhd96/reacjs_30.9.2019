import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
    return (
            <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input
                        type={type}
                        name={name}
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': error
                        })}
                        placeholder={placeholder}
                        value={value}
                        onChange= {onChange}
                    />
                    {error && <div className="invalid-feedback">This is invalid</div>}
            </div>
    )
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error:  PropTypes.string
    
}

TextInputGroup.defaultProps = {
    type: 'text'
}
export default TextInputGroup
