

var signPage = React.createElement({
    render: function(){
        return(
            React.createElement(
                'div',
                React.createElement(
                    "div",
                    { "class": "" },
                    React.createElement(
                        "nav",
                        { "class": "navbar navbar-default" },
                        React.createElement(
                            "div",
                            { "class": "container" },
                            React.createElement(
                                "ul",
                                { "class": "nav navbar-nav" },
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "Home"
                                    )
                                )
                            )
                        )
                    )
                ),
            )
        )
    }
})
ReactDOM.render(
    React.DOM.div(
    
    React.createElement(signPage,
    )
    
    ),
    document.getElementById('app')
);