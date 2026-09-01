import { type WithTranslation, withTranslation } from 'react-i18next';
import { Component, type ErrorInfo, type ReactNode, Suspense } from "react";
import { AppError, type FallbackProps } from "@/widgets/AppError";

interface Props extends WithTranslation {
    children: ReactNode;
    fallback?: (props: FallbackProps) => ReactNode;
    onReset?: () => void;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = {hasError: false, error: null};

    static getDerivedStateFromError(error: Error): State {
        return {hasError: true, error};
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Отправляем в мониторинг (Sentry, Datadog, etc.)
        console.error(error, {
            componentStack: info.componentStack,
            timestamp: new Date().toISOString(),
        });
    }

    // Сброс состояния ошибки
    handleReset = () => {
        this.props.onReset?.();
        this.setState({hasError: false, error: null});
    };

    render() {
        if (this.state.hasError && this.state.error) {
            // Кастомный fallback с возможностью восстановления
            if (this.props.fallback) {
                return this.props.fallback({
                    error: this.state.error,
                    resetError: this.handleReset,
                });
            }

            // Дефолтный fallback
            return (
                // suspense i18n
                <Suspense fallback=''>
                    <AppError error={this.state.error} resetError={this.handleReset}/>
                </Suspense>
            );
        }

        return this.props.children;
    }
}

export default withTranslation('common')(ErrorBoundary);