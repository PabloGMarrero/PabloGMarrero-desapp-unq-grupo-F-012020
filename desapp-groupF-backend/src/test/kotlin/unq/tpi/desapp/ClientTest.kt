package unq.tpi.desapp

import org.springframework.boot.test.context.SpringBootTest
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.assertEquals
import unq.tpi.desapp.Client

@SpringBootTest
class ClientTest {

	@Test
	fun constructorTest() {
		var client = Client("pepe", 1234)
	
		assertEquals(client.name, "pepe" )	
	}

}

