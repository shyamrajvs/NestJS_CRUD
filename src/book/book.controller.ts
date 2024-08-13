import { Body, Controller,Delete,Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('book')
export class BookController {
    constructor (private bookService:BookService){}

    @Get()
    async getAllBooks():Promise<Book[]>{
        return this.bookService.findAll()
    }
    @Post()
    async createBook(
        @Body()
        book,CreateBookDto
    ): Promise<Book> {
        return this.bookService.create(book);
    }

    @Get(':id')
    async getBook(
        @Param('id')
        id:string
    ):Promise<Book>{
        return this.bookService.findById(id);
    }

    @Put(':id')
    async upateBook(
        @Param('id')
        id:string,
        @Body()
        book ,UpdateBookDto,
    ): Promise<Book> {
        return this.bookService.updateById(id,book);
    }

    @Delete(':id')
    async deleteBokk(
        @Param('id')
        id:string,
        @Body()
        book ,UpdateBookDto,
    ): Promise<Book> {
        return this.bookService.deleteById(id);
    }
}
