import React from 'react'

export default function Alert({alert}) {
    return (
        alert && <div className={`alert container mt-2 alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.message}
        </div>
    )
}
