<div class="h-screen flex items-center justify-center">
	<div class="card p-5 text-lg">
		<h2 class="h2">Please sign in</h2>
		<form method="post" action="/login">
			<label class="label text-lg my-2">
				<span>E-mail</span>
				<input class="input" type="email" placeholder="E-mail" name="email" />
			</label>

			<label class="label text-lg my-2">
				<span>Password</span>
				<input class="input" type="password" placeholder="Password" name="password" />
			</label>

             <button type="submit" class="btn variant-filled-primary my-2 text-lg">Sign in</button>
		</form>
	</div>
</div>
