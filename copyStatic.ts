// 这段代码的用途是将当前目录中的public目录和views目录，
// 以及它们的所有子目录和文件，递归地复制到名为dist的目录中。
// 具体来说，它使用shelljs库中的cp命令来实现这个功能。
// -R选项表示递归复制，即复制目录及其所有子目录和文件。
import * as shelljs from "shelljs";

shelljs.cp("-R" , "public" , "dist");
shelljs.cp("-R" , "views" , "dist");