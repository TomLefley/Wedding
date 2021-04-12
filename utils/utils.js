export function isReceptionRequest(context) {
    const host = context.req.headers.host
  
    return host && host.includes("reception")
}