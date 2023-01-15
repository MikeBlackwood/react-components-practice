import className from 'classnames';


const Button = ({children, primary, secondary, success,
                    waring, danger, rounded, outline, ...rest}) => {

    const classes = className( rest.className,'flex item-center ','px-3 py-1.5 - border',{
        'bg-blue-500 border-blue-500 text-white' : primary,
        'bg-gray-900 border-gray-900 text-white' : secondary,
        'bg-green-500 border-green-500 text-white' : success,
        'bg-yellow-400 border-yellow-400 text-white' : waring,
        'bg-red-500 border-red-500 text-white' : danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && waring,
        'text-red-500': outline && danger
    } )

    return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes = {

    checkVariationValue : ({ primary, secondary, success, waring, danger}) => {
        const count = Number(!!primary) + Number(!!secondary)
            + Number(!!success)+ Number(!!waring) +Number(!!waring)
        if (count > 1)
        {
            return new Error("Only one option must be true")
        }

    }
};

export default Button;