const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development', // para producción 'production'
    entry: './src/index.tsx', // punto de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), // carpeta de salida
        filename: 'bundle.js', // nombre del archivo de salida
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    //Configuramos los plugins para que procesen el HTML
    plugins:[
        new HtmlWebpackPlugin({
            //Le decimos que archivo HTML va a usar como modelo base
            template: './index.html'
        })
    ],
    //Configuramos el servidor de desarrollo
    devServer: {
        port: 3000,
        open: true, // Abre el navegador automaticamente
        hot: true, // Habilitamos la recarga automatica 
    },
    devtool: 'source-map' // para depuración
}