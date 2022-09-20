export class ServiceContext {
    service: string = '';
}

export class ErrorHttpRequest{
    url: string = '';
    userAgent?: string;
}

export class ErrorContext{
    httpRequest: ErrorHttpRequest = new ErrorHttpRequest();
    user?: string;
}

export class DescriptorErrorEvent {

    /**
     * error time
     */
    eventTime: string = '';

    /**
     * service context : web by default
     */
    serviceContext: ServiceContext = new ServiceContext();

    /**
     * error message
     */
    message: string = '';

    /**
     * The error context
     */
    context: ErrorContext = new ErrorContext();

}