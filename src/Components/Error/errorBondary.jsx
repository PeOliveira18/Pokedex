import React, {Component} from "react";

class ErrorBoundary extends Component {
    state = { hasError: false, error: null, info: null };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({ error, info });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Algo deu errado! Tente novamente mais tarde.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;