class Status {
    constructor() {
        this.status = true
    }

    static getInstance() {
        if (!Status.instance) {
            Status.instance = new Status()
        }

        return Status.instance
    }

    change(status) {
        setTimeout(() => {this.status = false}, 0)
    }
}

export default Status
