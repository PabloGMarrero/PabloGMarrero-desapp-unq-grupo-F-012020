package unq.tpi.desapp

import org.springframework.boot.test.context.SpringBootTest
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.assertEquals
import unq.tpi.desapp.Producto

@SpringBootTest
class ProductoTest {

    @Test
    fun constructorTest() {

        assertEquals("pepe", "pepe" )
    }

}