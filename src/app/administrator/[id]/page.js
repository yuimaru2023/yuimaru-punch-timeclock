"use client"

export default function Slug(params) {
    console.log(params.params)

    return(<>
    <p>p.{params.params.id}</p>
    </>)
}