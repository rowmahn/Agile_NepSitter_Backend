const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://nepsitter:<nepsitter123>@cluster0.vxjko.mongodb.net/NepSitterdb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true
})