export default   function WhyMe() {
    return (
      <div ref={whyMeRef}>
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: [1, 1, 0, 0, 0],
              scale: [1, 2, 2],
              delay: 1,
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            className="mockup-code my-5 md:mx-96"
            id="why-me"
          >
            <pre data-prefix="$" className="text-warning">
              <code>Upgrade to a website that is</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="text-warning">
              <code>painless to maintain...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="text-warning ">
              <code>secure by design...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 0, 1, 0, 0],
              scale: [1, 2, 1],
              delay: 1,
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            className="mockup-window border bg-base-300 "
          >
            <div className="flex justify-center bg-base-200 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl  font-semibold text-transparent  ">
              <div className="my-20 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl font-semibold text-transparent ">
                Looks stunning
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 0, 0, 1, 0],
            scale: [1, 2, 1, 1],
            delay: 1,
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="mockup-phone border-primary"
        >
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div className="my-20 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl font-semibold text-transparent ">
                Consistent
              </div>
              <div className="">on any device</div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }