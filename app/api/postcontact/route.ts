// app/api/example/route.js

import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";


export async function POST(request: Request) {
    try {

        const body = await request.json();
        console.log("Done");

        let data=await fs.promises.readdir('contactdata');
        // console.log(data);
        fs.promises.writeFile(`contactdata/${data.length + 1}.json`,JSON.stringify(body));

        return NextResponse.json({
            message: "POST request received",
            data: body,
        }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({
            message: "Error processing POST request",
        }, { status: 500 });
    }
    
}

